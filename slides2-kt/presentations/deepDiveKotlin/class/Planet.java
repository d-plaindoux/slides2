package _05_class_1;

import java.util.List;
import kotlin.Metadata;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;

@Metadata(
   mv = {1, 1, 9},
   bv = {1, 0, 2},
   k = 1,
   d1 = {"\u00000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010 \n\u0002\u0018\u0002\n\u0002\b\t\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\b\n\u0002\b\u0003\b\u0086\b\u0018\u00002\u00020\u0001B\u001d\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u000e\b\u0002\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¢\u0006\u0002\u0010\u0007J\t\u0010\f\u001a\u00020\u0003HÆ\u0003J\u000f\u0010\r\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005HÆ\u0003J#\u0010\u000e\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\u000e\b\u0002\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005HÆ\u0001J\u0013\u0010\u000f\u001a\u00020\u00102\b\u0010\u0011\u001a\u0004\u0018\u00010\u0012HÖ\u0003J\t\u0010\u0013\u001a\u00020\u0014HÖ\u0001J\u0011\u0010\u0015\u001a\u00020\u00002\u0006\u0010\u0016\u001a\u00020\u0006H\u0086\u0002J\t\u0010\u0017\u001a\u00020\u0003HÖ\u0001R\u0017\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¢\u0006\b\n\u0000\u001a\u0004\b\b\u0010\tR\u0014\u0010\u0002\u001a\u00020\u0003X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b\n\u0010\u000b"},
   d2 = {"L_05_class_1/Planet;", "L_05_class_1/AstronomicalBody;", "name", "", "moons", "", "L_05_class_1/Moon;", "(Ljava/lang/String;Ljava/util/List;)V", "getMoons", "()Ljava/util/List;", "getName", "()Ljava/lang/String;", "component1", "component2", "copy", "equals", "", "other", "", "hashCode", "", "plus", "moon", "toString"}
)
public final class Planet implements AstronomicalBody {
   @NotNull
   private final String name;
   @NotNull
   private final List moons;

   @NotNull
   public final Planet plus(@NotNull Moon moon) {
      Intrinsics.checkParameterIsNotNull(moon, "moon");
      return copy$default(this, (String)null, CollectionsKt.listOf(moon), 1, (Object)null);
   }

   @NotNull
   public String getName() {
      return this.name;
   }

   @NotNull
   public final List getMoons() {
      return this.moons;
   }

   public Planet(@NotNull String name, @NotNull List moons) {
      Intrinsics.checkParameterIsNotNull(name, "name");
      Intrinsics.checkParameterIsNotNull(moons, "moons");
      super();
      this.name = name;
      this.moons = moons;
      CharSequence var3 = (CharSequence)this.getName();
      boolean var5 = var3.length() > 0;
      if (!var5) {
         String var4 = "Failed requirement.";
         throw (Throwable)(new IllegalArgumentException(var4.toString()));
      }
   }

   // $FF: synthetic method
   public Planet(String var1, List var2, int var3, DefaultConstructorMarker var4) {
      if ((var3 & 2) != 0) {
         var2 = CollectionsKt.emptyList();
      }

      this(var1, var2);
   }

   @NotNull
   public final String component1() {
      return this.getName();
   }

   @NotNull
   public final List component2() {
      return this.moons;
   }

   @NotNull
   public final Planet copy(@NotNull String name, @NotNull List moons) {
      Intrinsics.checkParameterIsNotNull(name, "name");
      Intrinsics.checkParameterIsNotNull(moons, "moons");
      return new Planet(name, moons);
   }

   public String toString() {
      return "Planet(name=" + this.getName() + ", moons=" + this.moons + ")";
   }

   public int hashCode() {
      String var10000 = this.getName();
      return (var10000 != null ? var10000.hashCode() : 0) * 31 + (this.moons != null ? this.moons.hashCode() : 0);
   }

   public boolean equals(Object var1) {
      if (this != var1) {
         if (var1 instanceof Planet) {
            Planet var2 = (Planet)var1;
            if (Intrinsics.areEqual(this.getName(), var2.getName()) && Intrinsics.areEqual(this.moons, var2.moons)) {
               return true;
            }
         }

         return false;
      } else {
         return true;
      }
   }
}
